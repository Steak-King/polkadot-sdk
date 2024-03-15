// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Implementation of `runtime`.
//!
//! `runtime` implementation is recursive and can generate code which will call itself
//! in order to get all the pallet parts for each pallet.
//!
//! Pallets can define their parts:
//!  - Implicitly: `pub type System = frame_system;`
//!  - Explicitly: `pub type System = frame_system + Pallet + Call;`
//!
//! The `runtime` transitions from the implicit definition to the explicit one.
//! From the explicit state, Substrate expands the pallets with additional information
//! that is to be included in the runtime metadata.
//!
//! Pallets must provide the `tt_default_parts_v2` macro for these transitions.
//! These are automatically implemented by the `#[pallet::pallet]` macro.
//!
//! This macro also generates the following enums for ease of decoding if the respective type
//! is defined inside `#[runtime::derive]`:
//!  - `enum RuntimeCall`: This type contains the information needed to decode extrinsics.
//!  - `enum RuntimeEvent`: This type contains the information needed to decode events.
//!  - `enum RuntimeError`: While this cannot be used directly to decode `sp_runtime::DispatchError`
//!    from the chain, it contains the information needed to decode the
//!    `sp_runtime::DispatchError::Module`.
//!
//! # State Transitions
//!
//! ```ignore
//!  +----------+
//!  | Implicit |
//!  +----------+           
//!      |                  
//!      v                  
//!  +----------+
//!  | Explicit |
//!  +----------+
//! ```
//!
//! The `runtime` macro transforms the implicit declaration of each pallet
//! `System: frame_system` to an explicit one `System: frame_system + Pallet + Call` using the
//! `tt_default_parts_v2` macro.
//!
//! The `tt_default_parts_v2` macro exposes a plus separated list of pallet parts. For example, the
//! `Event` part is exposed only if the pallet implements an event via `#[pallet::event]` macro.
//! The tokens generated by this macro are `+ Pallet + Call` for our example.
//!
//! The `match_and_insert` macro takes in 3 arguments:
//!  - target: This is the `TokenStream` that contains the `runtime` macro.
//!  - pattern: The pattern to match against in the target stream.
//!  - tokens: The tokens to added after the pattern match.
//!
//! The `runtime` macro uses the `tt_call` to get the default pallet parts via
//! the `tt_default_parts_v2` macro defined by each pallet. The pallet parts are then returned as
//! input to the `match_and_replace` macro.
//! The `match_and_replace` then will modify the `runtime` to expand the implicit
//! definition to the explicit one.
//!
//! For example,
//!
//! ```ignore
//! #[frame_support::runtime]
//! mod runtime {
//! 	//...
//!
//!     #[runtime::pallet_index(0)]
//! 	pub type System = frame_system; // Implicit definition of parts
//!
//!     #[runtime::pallet_index(1)]
//! 	pub type Balances = pallet_balances; // Implicit definition of parts
//! }
//! ```
//! This call has some implicit pallet parts, thus it will expand to:
//! ```ignore
//! frame_support::__private::tt_call! {
//! 	macro = [{ pallet_balances::tt_default_parts_v2 }]
//! 	~~> frame_support::match_and_insert! {
//! 		target = [{
//! 			frame_support::__private::tt_call! {
//! 				macro = [{ frame_system::tt_default_parts_v2 }]
//! 				~~> frame_support::match_and_insert! {
//! 					target = [{
//!                         #[frame_support::runtime]
//!                         mod runtime {
//! 	                        //...
//!
//!                             #[runtime::pallet_index(0)]
//! 		                    pub type System = frame_system;
//!                             
//! 							#[runtime::pallet_index(1)]
//! 		                    pub type Balances = pallet_balances;
//!                         }
//! 					}]
//! 					pattern = [{ System = frame_system }]
//! 				}
//! 			}
//! 		}]
//! 		pattern = [{ Balances = pallet_balances }]
//! 	}
//! }
//! ```
//! `tt_default_parts_v2` must be defined. It returns the pallet parts inside some tokens, and
//! then `tt_call` will pipe the returned pallet parts into the input of `match_and_insert`.
//! Thus `match_and_insert` will initially receive the following inputs:
//! ```ignore
//! frame_support::match_and_insert! {
//! 	target = [{
//! 		frame_support::match_and_insert! {
//! 			target = [{
//!                  #[frame_support::runtime]
//!                  mod runtime {
//! 	                 //...
//!
//!                      #[runtime::pallet_index(0)]
//! 		             pub type System = frame_system;
//!
//!                      #[runtime::pallet_index(1)]
//! 		             pub type Balances = pallet_balances;
//!                  }
//! 			}]
//! 			pattern = [{ System = frame_system }]
//! 			tokens = [{ ::{+ Pallet + Call} }]
//! 		}
//! 	}]
//! 	pattern = [{ Balances = pallet_balances }]
//! 	tokens = [{ ::{+ Pallet + Call} }]
//! }
//! ```
//! After dealing with `pallet_balances`, the inner `match_and_insert` will expand to:
//! ```ignore
//! frame_support::match_and_insert! {
//! 	target = [{
//! 		#[frame_support::runtime]
//!         mod runtime {
//! 	        //...
//!
//!             #[runtime::pallet_index(0)]
//! 		    pub type System = frame_system; // Implicit definition of parts
//!
//!             #[runtime::pallet_index(1)]
//! 		    pub type Balances = pallet_balances + Pallet + Call; // Explicit definition of parts
//!         }
//! 	}]
//! 	pattern = [{ System = frame_system }]
//! 	tokens = [{ ::{+ Pallet + Call} }]
//! }
//! ```
//!
//! Which will then finally expand to the following:
//! ```ignore
//! #[frame_support::runtime]
//! mod runtime {
//! 	//...
//!
//!     #[runtime::pallet_index(0)]
//! 	pub type System = frame_system + Pallet + Call;
//!
//!     #[runtime::pallet_index(1)]
//! 	pub type Balances = pallet_balances + Pallet + Call;
//! }
//! ```
//!
//! This call has no implicit pallet parts, thus it will expand to the runtime construction:
//! ```ignore
//! pub struct Runtime { ... }
//! pub struct Call { ... }
//! impl Call ...
//! pub enum Origin { ... }
//! ...
//! ```
//!
//! Visualizing the entire flow of `#[frame_support::runtime]`, it would look like the following:
//!
//! ```ignore
//! +----------------------+     +------------------------+     +-------------------+
//! |                      |     | (defined in pallet)    |     |                   |
//! | runtime              | --> |  tt_default_parts_v2!  | --> | match_and_insert! |
//! | w/ no pallet parts   |     |                        |     |                   |
//! +----------------------+     +------------------------+     +-------------------+
//!
//!     +----------------------+
//!     |                      |
//! --> | runtime              |
//!     |  w/ pallet parts     |
//!     +----------------------+
//! ```

#![cfg(feature = "experimental")]

pub use parse::Def;
use proc_macro::TokenStream;
use syn::spanned::Spanned;

mod expand;
mod parse;

mod keyword {
	syn::custom_keyword!(legacy_ordering);
}

pub fn runtime(attr: TokenStream, tokens: TokenStream) -> TokenStream {
	let mut legacy_ordering = false;
	if !attr.is_empty() {
		if let Ok(_) = syn::parse::<keyword::legacy_ordering>(attr.clone()) {
			legacy_ordering = true;
		} else {
			let msg = "Invalid runtime macro call: unexpected attribute. Macro call must be \
				bare, such as `#[frame_support::runtime]` or `#[runtime]`, or must specify the \
				`legacy_ordering` attribute, such as `#[frame_support::runtime(legacy_ordering)]` or \
				#[runtime(legacy_ordering)].";
			let span = proc_macro2::TokenStream::from(attr).span();
			return syn::Error::new(span, msg).to_compile_error().into()
		}
	}

	let item = syn::parse_macro_input!(tokens as syn::ItemMod);
	match parse::Def::try_from(item) {
		Ok(def) => expand::expand(def, legacy_ordering).into(),
		Err(e) => e.to_compile_error().into(),
	}
}
