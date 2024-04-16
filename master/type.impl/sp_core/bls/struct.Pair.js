(function() {var type_impls = {
"sp_application_crypto":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Pair%3CT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Pair%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Pair&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: EngineBLS,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Pair&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_application_crypto::bls377::Pair","sp_application_crypto::bls381::Pair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pair-for-Pair%3CT%3E\" class=\"impl\"><a href=\"#impl-Pair-for-Pair%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; Pair for Pair&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: BlsBound,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_raw_vec\" class=\"method trait-impl\"><a href=\"#method.to_raw_vec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">to_raw_vec</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Get the seed for this key.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Seed\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Seed\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Seed</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]</h4></section></summary><div class='docblock'>The type used to (minimally) encode the data required to securely create\na new key pair.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Public\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Public\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Public</a> = CryptoBytes&lt;sp_core::::bls::Public::{constant#0}, (PublicTag, (BlsTag, T))&gt;</h4></section></summary><div class='docblock'>The type which is used to encode a public key.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Signature\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Signature\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Signature</a> = CryptoBytes&lt;sp_core::::bls::Signature::{constant#0}, (SignatureTag, (BlsTag, T))&gt;</h4></section></summary><div class='docblock'>The type used to represent a signature. Can be created from a key pair and a message\nand verified with the message and a public key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_seed_slice\" class=\"method trait-impl\"><a href=\"#method.from_seed_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_seed_slice</a>(seed_slice: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Pair&lt;T&gt;, SecretStringError&gt;</h4></section></summary><div class='docblock'>Make a new key pair from secret seed material. The slice must be the correct size or\nan error will be returned. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.derive\" class=\"method trait-impl\"><a href=\"#method.derive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">derive</a>&lt;Iter&gt;(\n    &amp;self,\n    path: Iter,\n    seed: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(Pair&lt;T&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]&gt;), DeriveError&gt;<span class=\"where fmt-newline\">where\n    Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"sp_application_crypto/enum.DeriveJunction.html\" title=\"enum sp_application_crypto::DeriveJunction\">DeriveJunction</a>&gt;,</span></h4></section></summary><div class='docblock'>Derive a child key from a series of given junctions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.public\" class=\"method trait-impl\"><a href=\"#method.public\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">public</a>(&amp;self) -&gt; &lt;Pair&lt;T&gt; as Pair&gt;::Public</h4></section></summary><div class='docblock'>Get the public key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sign\" class=\"method trait-impl\"><a href=\"#method.sign\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">sign</a>(&amp;self, message: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; &lt;Pair&lt;T&gt; as Pair&gt;::Signature</h4></section></summary><div class='docblock'>Sign a message.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify\" class=\"method trait-impl\"><a href=\"#method.verify\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">verify</a>&lt;M&gt;(\n    sig: &amp;&lt;Pair&lt;T&gt; as Pair&gt;::Signature,\n    message: M,\n    pubkey: &amp;&lt;Pair&lt;T&gt; as Pair&gt;::Public\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a><span class=\"where fmt-newline\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;,</span></h4></section></summary><div class='docblock'>Verify a signature on a message. Returns true if the signature is good.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.generate\" class=\"method trait-impl\"><a href=\"#method.generate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">generate</a>() -&gt; (Self, Self::Seed)</h4></section></summary><div class='docblock'>Generate new secure (random) key pair. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.generate_with_phrase\" class=\"method trait-impl\"><a href=\"#method.generate_with_phrase\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">generate_with_phrase</a>(password: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;) -&gt; (Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, Self::Seed)</h4></section></summary><div class='docblock'>Generate new secure (random) key pair and provide the recovery phrase. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_phrase\" class=\"method trait-impl\"><a href=\"#method.from_phrase\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_phrase</a>(\n    phrase: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    password: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(Self, Self::Seed), SecretStringError&gt;</h4></section></summary><div class='docblock'>Returns the KeyPair from the English BIP39 seed <code>phrase</code>, or an error if it’s invalid.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_seed\" class=\"method trait-impl\"><a href=\"#method.from_seed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_seed</a>(seed: &amp;Self::Seed) -&gt; Self</h4></section></summary><div class='docblock'>Generate new key pair from the provided <code>seed</code>. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_string_with_seed\" class=\"method trait-impl\"><a href=\"#method.from_string_with_seed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_string_with_seed</a>(\n    s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    password_override: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(Self, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self::Seed&gt;), SecretStringError&gt;</h4></section></summary><div class='docblock'>Interprets the string <code>s</code> in order to generate a key Pair. Returns both the pair and an\noptional seed, in the case that the pair can be expressed as a direct derivation from a seed\n(some cases, such as Sr25519 derivations with path components, cannot). <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_string\" class=\"method trait-impl\"><a href=\"#method.from_string\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_string</a>(\n    s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    password_override: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SecretStringError&gt;</h4></section></summary><div class='docblock'>Interprets the string <code>s</code> in order to generate a key pair. <a>Read more</a></div></details></div></details>","Pair","sp_application_crypto::bls377::Pair","sp_application_crypto::bls381::Pair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CryptoType-for-Pair%3CT%3E\" class=\"impl\"><a href=\"#impl-CryptoType-for-Pair%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; CryptoType for Pair&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: BlsBound,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Pair\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Pair\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Pair</a> = Pair&lt;T&gt;</h4></section></summary><div class='docblock'>The pair key type of this crypto.</div></details></div></details>","CryptoType","sp_application_crypto::bls377::Pair","sp_application_crypto::bls381::Pair"]],
"sp_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CryptoType-for-Pair%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#227-229\">source</a><a href=\"#impl-CryptoType-for-Pair%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: BlsBound&gt; <a class=\"trait\" href=\"sp_core/crypto/trait.CryptoType.html\" title=\"trait sp_core::crypto::CryptoType\">CryptoType</a> for <a class=\"struct\" href=\"sp_core/bls/struct.Pair.html\" title=\"struct sp_core::bls::Pair\">Pair</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Pair\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Pair\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sp_core/crypto/trait.CryptoType.html#associatedtype.Pair\" class=\"associatedtype\">Pair</a> = <a class=\"struct\" href=\"sp_core/bls/struct.Pair.html\" title=\"struct sp_core::bls::Pair\">Pair</a>&lt;T&gt;</h4></section></summary><div class='docblock'>The pair key type of this crypto.</div></details></div></details>","CryptoType","sp_core::bls::bls377::Pair","sp_core::bls::bls381::Pair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Pair%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#126-130\">source</a><a href=\"#impl-Clone-for-Pair%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: EngineBLS&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sp_core/bls/struct.Pair.html\" title=\"struct sp_core::bls::Pair\">Pair</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#127-129\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_core::bls::bls377::Pair","sp_core::bls::bls381::Pair"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Pair-for-Pair%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#144-225\">source</a><a href=\"#impl-Pair-for-Pair%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: BlsBound&gt; <a class=\"trait\" href=\"sp_core/crypto/trait.Pair.html\" title=\"trait sp_core::crypto::Pair\">Pair</a> for <a class=\"struct\" href=\"sp_core/bls/struct.Pair.html\" title=\"struct sp_core::bls::Pair\">Pair</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_raw_vec\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#218-224\">source</a><a href=\"#method.to_raw_vec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#tymethod.to_raw_vec\" class=\"fn\">to_raw_vec</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Get the seed for this key.</p>\n</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Seed\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Seed\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sp_core/crypto/trait.Pair.html#associatedtype.Seed\" class=\"associatedtype\">Seed</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]</h4></section></summary><div class='docblock'>The type used to (minimally) encode the data required to securely create\na new key pair.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Public\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Public\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sp_core/crypto/trait.Pair.html#associatedtype.Public\" class=\"associatedtype\">Public</a> = <a class=\"struct\" href=\"sp_core/crypto_bytes/struct.CryptoBytes.html\" title=\"struct sp_core::crypto_bytes::CryptoBytes\">CryptoBytes</a>&lt;PUBLIC_KEY_SERIALIZED_SIZE, (<a class=\"struct\" href=\"sp_core/crypto_bytes/struct.PublicTag.html\" title=\"struct sp_core::crypto_bytes::PublicTag\">PublicTag</a>, (BlsTag, T))&gt;</h4></section></summary><div class='docblock'>The type which is used to encode a public key.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Signature\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Signature\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sp_core/crypto/trait.Pair.html#associatedtype.Signature\" class=\"associatedtype\">Signature</a> = <a class=\"struct\" href=\"sp_core/crypto_bytes/struct.CryptoBytes.html\" title=\"struct sp_core::crypto_bytes::CryptoBytes\">CryptoBytes</a>&lt;SIGNATURE_SERIALIZED_SIZE, (<a class=\"struct\" href=\"sp_core/crypto_bytes/struct.SignatureTag.html\" title=\"struct sp_core::crypto_bytes::SignatureTag\">SignatureTag</a>, (BlsTag, T))&gt;</h4></section></summary><div class='docblock'>The type used to represent a signature. Can be created from a key pair and a message\nand verified with the message and a public key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_seed_slice\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#149-156\">source</a><a href=\"#method.from_seed_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#tymethod.from_seed_slice\" class=\"fn\">from_seed_slice</a>(seed_slice: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"sp_core/crypto/enum.SecretStringError.html\" title=\"enum sp_core::crypto::SecretStringError\">SecretStringError</a>&gt;</h4></section></summary><div class='docblock'>Make a new key pair from secret seed material. The slice must be the correct size or\nan error will be returned. <a href=\"sp_core/crypto/trait.Pair.html#tymethod.from_seed_slice\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.derive\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#158-174\">source</a><a href=\"#method.derive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#tymethod.derive\" class=\"fn\">derive</a>&lt;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"sp_core/crypto/enum.DeriveJunction.html\" title=\"enum sp_core::crypto::DeriveJunction\">DeriveJunction</a>&gt;&gt;(\n    &amp;self,\n    path: Iter,\n    seed: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(Self, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">32</a>]&gt;), <a class=\"enum\" href=\"sp_core/crypto/enum.DeriveError.html\" title=\"enum sp_core::crypto::DeriveError\">DeriveError</a>&gt;</h4></section></summary><div class='docblock'>Derive a child key from a series of given junctions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.public\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#176-181\">source</a><a href=\"#method.public\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#tymethod.public\" class=\"fn\">public</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Public\" title=\"type sp_core::crypto::Pair::Public\">Public</a></h4></section></summary><div class='docblock'>Get the public key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sign\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#184-192\">source</a><a href=\"#method.sign\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#tymethod.sign\" class=\"fn\">sign</a>(&amp;self, message: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Signature\" title=\"type sp_core::crypto::Pair::Signature\">Signature</a></h4></section></summary><div class='docblock'>Sign a message.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/bls.rs.html#194-215\">source</a><a href=\"#method.verify\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#tymethod.verify\" class=\"fn\">verify</a>&lt;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(\n    sig: &amp;Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Signature\" title=\"type sp_core::crypto::Pair::Signature\">Signature</a>,\n    message: M,\n    pubkey: &amp;Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Public\" title=\"type sp_core::crypto::Pair::Public\">Public</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Verify a signature on a message. Returns true if the signature is good.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.generate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto.rs.html#826-830\">source</a><a href=\"#method.generate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#method.generate\" class=\"fn\">generate</a>() -&gt; (Self, Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Seed\" title=\"type sp_core::crypto::Pair::Seed\">Seed</a>)</h4></section></summary><div class='docblock'>Generate new secure (random) key pair. <a href=\"sp_core/crypto/trait.Pair.html#method.generate\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.generate_with_phrase\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto.rs.html#839-845\">source</a><a href=\"#method.generate_with_phrase\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#method.generate_with_phrase\" class=\"fn\">generate_with_phrase</a>(password: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;) -&gt; (Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Seed\" title=\"type sp_core::crypto::Pair::Seed\">Seed</a>)</h4></section></summary><div class='docblock'>Generate new secure (random) key pair and provide the recovery phrase. <a href=\"sp_core/crypto/trait.Pair.html#method.generate_with_phrase\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_phrase\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto.rs.html#848-864\">source</a><a href=\"#method.from_phrase\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#method.from_phrase\" class=\"fn\">from_phrase</a>(\n    phrase: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    password: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(Self, Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Seed\" title=\"type sp_core::crypto::Pair::Seed\">Seed</a>), <a class=\"enum\" href=\"sp_core/crypto/enum.SecretStringError.html\" title=\"enum sp_core::crypto::SecretStringError\">SecretStringError</a>&gt;</h4></section></summary><div class='docblock'>Returns the KeyPair from the English BIP39 seed <code>phrase</code>, or an error if it’s invalid.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_seed\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto.rs.html#877-879\">source</a><a href=\"#method.from_seed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#method.from_seed\" class=\"fn\">from_seed</a>(seed: &amp;Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Seed\" title=\"type sp_core::crypto::Pair::Seed\">Seed</a>) -&gt; Self</h4></section></summary><div class='docblock'>Generate new key pair from the provided <code>seed</code>. <a href=\"sp_core/crypto/trait.Pair.html#method.from_seed\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_string_with_seed\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto.rs.html#924-952\">source</a><a href=\"#method.from_string_with_seed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#method.from_string_with_seed\" class=\"fn\">from_string_with_seed</a>(\n    s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    password_override: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(Self, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self::<a class=\"associatedtype\" href=\"sp_core/crypto/trait.Pair.html#associatedtype.Seed\" title=\"type sp_core::crypto::Pair::Seed\">Seed</a>&gt;), <a class=\"enum\" href=\"sp_core/crypto/enum.SecretStringError.html\" title=\"enum sp_core::crypto::SecretStringError\">SecretStringError</a>&gt;</h4></section></summary><div class='docblock'>Interprets the string <code>s</code> in order to generate a key Pair. Returns both the pair and an\noptional seed, in the case that the pair can be expressed as a direct derivation from a seed\n(some cases, such as Sr25519 derivations with path components, cannot). <a href=\"sp_core/crypto/trait.Pair.html#method.from_string_with_seed\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_string\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_core/crypto.rs.html#957-959\">source</a><a href=\"#method.from_string\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/crypto/trait.Pair.html#method.from_string\" class=\"fn\">from_string</a>(\n    s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    password_override: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"sp_core/crypto/enum.SecretStringError.html\" title=\"enum sp_core::crypto::SecretStringError\">SecretStringError</a>&gt;</h4></section></summary><div class='docblock'>Interprets the string <code>s</code> in order to generate a key pair. <a href=\"sp_core/crypto/trait.Pair.html#method.from_string\">Read more</a></div></details></div></details>","Pair","sp_core::bls::bls377::Pair","sp_core::bls::bls381::Pair"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()