(function() {var implementors = {
"bridge_hub_common":[["impl&lt;XcmpProcessor, SnowbridgeProcessor&gt; ProcessMessage for <a class=\"struct\" href=\"bridge_hub_common/message_queue/struct.BridgeHubMessageRouter.html\" title=\"struct bridge_hub_common::message_queue::BridgeHubMessageRouter\">BridgeHubMessageRouter</a>&lt;XcmpProcessor, SnowbridgeProcessor&gt;<span class=\"where fmt-newline\">where\n    XcmpProcessor: ProcessMessage&lt;Origin = <a class=\"enum\" href=\"bridge_hub_common/message_queue/enum.AggregateMessageOrigin.html\" title=\"enum bridge_hub_common::message_queue::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt;,\n    SnowbridgeProcessor: ProcessMessage&lt;Origin = <a class=\"enum\" href=\"bridge_hub_common/message_queue/enum.AggregateMessageOrigin.html\" title=\"enum bridge_hub_common::message_queue::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt;,</span>"]],
"pallet_contracts_mock_network":[["impl ProcessMessage for <a class=\"struct\" href=\"pallet_contracts_mock_network/mocks/relay_message_queue/struct.MessageProcessor.html\" title=\"struct pallet_contracts_mock_network::mocks::relay_message_queue::MessageProcessor\">MessageProcessor</a>"],["impl ProcessMessage for <a class=\"struct\" href=\"pallet_contracts_mock_network/struct.Relay.html\" title=\"struct pallet_contracts_mock_network::Relay\">Relay</a>"]],
"pallet_message_queue":[["impl&lt;Origin, const REQUIRED_WEIGHT: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>&gt; ProcessMessage for <a class=\"struct\" href=\"pallet_message_queue/mock_helpers/struct.NoopMessageProcessor.html\" title=\"struct pallet_message_queue::mock_helpers::NoopMessageProcessor\">NoopMessageProcessor</a>&lt;Origin, REQUIRED_WEIGHT&gt;<span class=\"where fmt-newline\">where\n    Origin: FullCodec + MaxEncodedLen + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + TypeInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"]],
"rococo_runtime":[["impl <a class=\"trait\" href=\"frame_support/traits/messages/trait.ProcessMessage.html\" title=\"trait frame_support::traits::messages::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"rococo_runtime/struct.MessageProcessor.html\" title=\"struct rococo_runtime::MessageProcessor\">MessageProcessor</a>"]],
"snowbridge_pallet_outbound_queue":[["impl&lt;T: <a class=\"trait\" href=\"snowbridge_pallet_outbound_queue/pallet/trait.Config.html\" title=\"trait snowbridge_pallet_outbound_queue::pallet::Config\">Config</a>&gt; ProcessMessage for <a class=\"struct\" href=\"snowbridge_pallet_outbound_queue/pallet/struct.Pallet.html\" title=\"struct snowbridge_pallet_outbound_queue::pallet::Pallet\">Pallet</a>&lt;T&gt;"]],
"staging_xcm_builder":[["impl&lt;MessageOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; + FullCodec + MaxEncodedLen + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + TypeInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, XcmExecutor: <a class=\"trait\" href=\"staging_xcm_builder/test_utils/trait.ExecuteXcm.html\" title=\"trait staging_xcm_builder::test_utils::ExecuteXcm\">ExecuteXcm</a>&lt;Call&gt;, Call&gt; ProcessMessage for <a class=\"struct\" href=\"staging_xcm_builder/struct.ProcessXcmMessage.html\" title=\"struct staging_xcm_builder::ProcessXcmMessage\">ProcessXcmMessage</a>&lt;MessageOrigin, XcmExecutor, Call&gt;"]],
"westend_runtime":[["impl <a class=\"trait\" href=\"frame_support/traits/messages/trait.ProcessMessage.html\" title=\"trait frame_support::traits::messages::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"westend_runtime/struct.MessageProcessor.html\" title=\"struct westend_runtime::MessageProcessor\">MessageProcessor</a>"]],
"xcm_emulator":[["impl&lt;T, M&gt; <a class=\"trait\" href=\"xcm_emulator/trait.ProcessMessage.html\" title=\"trait xcm_emulator::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"xcm_emulator/struct.DefaultParaMessageProcessor.html\" title=\"struct xcm_emulator::DefaultParaMessageProcessor\">DefaultParaMessageProcessor</a>&lt;T, M&gt;<span class=\"where fmt-newline\">where\n    M: FullCodec + <a class=\"trait\" href=\"xcm_emulator/trait.MaxEncodedLen.html\" title=\"trait xcm_emulator::MaxEncodedLen\">MaxEncodedLen</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + TypeInfo + <a class=\"trait\" href=\"xcm_emulator/trait.Debug.html\" title=\"trait xcm_emulator::Debug\">Debug</a>,\n    T: <a class=\"trait\" href=\"xcm_emulator/trait.Parachain.html\" title=\"trait xcm_emulator::Parachain\">Parachain</a>,\n    T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a>: <a class=\"trait\" href=\"xcm_emulator/trait.MessageQueueConfig.html\" title=\"trait xcm_emulator::MessageQueueConfig\">MessageQueueConfig</a>,\n    &lt;&lt;T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a> as <a class=\"trait\" href=\"xcm_emulator/trait.MessageQueueConfig.html\" title=\"trait xcm_emulator::MessageQueueConfig\">MessageQueueConfig</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.MessageQueueConfig.html#associatedtype.MessageProcessor\" title=\"type xcm_emulator::MessageQueueConfig::MessageProcessor\">MessageProcessor</a> as <a class=\"trait\" href=\"xcm_emulator/trait.ProcessMessage.html\" title=\"trait xcm_emulator::ProcessMessage\">ProcessMessage</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.ProcessMessage.html#associatedtype.Origin\" title=\"type xcm_emulator::ProcessMessage::Origin\">Origin</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;M&gt;,\n    <a class=\"struct\" href=\"xcm_emulator/struct.MessageQueuePallet.html\" title=\"struct xcm_emulator::MessageQueuePallet\">MessageQueuePallet</a>&lt;T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a>&gt;: <a class=\"trait\" href=\"xcm_emulator/trait.EnqueueMessage.html\" title=\"trait xcm_emulator::EnqueueMessage\">EnqueueMessage</a>&lt;M&gt; + <a class=\"trait\" href=\"xcm_emulator/trait.ServiceQueues.html\" title=\"trait xcm_emulator::ServiceQueues\">ServiceQueues</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"xcm_emulator/trait.ProcessMessage.html\" title=\"trait xcm_emulator::ProcessMessage\">ProcessMessage</a> for <a class=\"struct\" href=\"xcm_emulator/struct.DefaultRelayMessageProcessor.html\" title=\"struct xcm_emulator::DefaultRelayMessageProcessor\">DefaultRelayMessageProcessor</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"xcm_emulator/trait.RelayChain.html\" title=\"trait xcm_emulator::RelayChain\">RelayChain</a>,\n    T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a>: <a class=\"trait\" href=\"xcm_emulator/trait.MessageQueueConfig.html\" title=\"trait xcm_emulator::MessageQueueConfig\">MessageQueueConfig</a>,\n    &lt;&lt;T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a> as <a class=\"trait\" href=\"xcm_emulator/trait.MessageQueueConfig.html\" title=\"trait xcm_emulator::MessageQueueConfig\">MessageQueueConfig</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.MessageQueueConfig.html#associatedtype.MessageProcessor\" title=\"type xcm_emulator::MessageQueueConfig::MessageProcessor\">MessageProcessor</a> as <a class=\"trait\" href=\"xcm_emulator/trait.ProcessMessage.html\" title=\"trait xcm_emulator::ProcessMessage\">ProcessMessage</a>&gt;::<a class=\"associatedtype\" href=\"xcm_emulator/trait.ProcessMessage.html#associatedtype.Origin\" title=\"type xcm_emulator::ProcessMessage::Origin\">Origin</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"xcm_emulator/enum.AggregateMessageOrigin.html\" title=\"enum xcm_emulator::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt;,\n    <a class=\"struct\" href=\"xcm_emulator/struct.MessageQueuePallet.html\" title=\"struct xcm_emulator::MessageQueuePallet\">MessageQueuePallet</a>&lt;T::<a class=\"associatedtype\" href=\"xcm_emulator/trait.Chain.html#associatedtype.Runtime\" title=\"type xcm_emulator::Chain::Runtime\">Runtime</a>&gt;: <a class=\"trait\" href=\"xcm_emulator/trait.EnqueueMessage.html\" title=\"trait xcm_emulator::EnqueueMessage\">EnqueueMessage</a>&lt;<a class=\"enum\" href=\"xcm_emulator/enum.AggregateMessageOrigin.html\" title=\"enum xcm_emulator::AggregateMessageOrigin\">AggregateMessageOrigin</a>&gt; + <a class=\"trait\" href=\"xcm_emulator/trait.ServiceQueues.html\" title=\"trait xcm_emulator::ServiceQueues\">ServiceQueues</a>,</span>"]],
"xcm_fuzzer":[["impl ProcessMessage for <a class=\"struct\" href=\"xcm_fuzzer/struct.Relay.html\" title=\"struct xcm_fuzzer::Relay\">Relay</a>"],["impl ProcessMessage for <a class=\"struct\" href=\"xcm_fuzzer/relay_chain/struct.MessageProcessor.html\" title=\"struct xcm_fuzzer::relay_chain::MessageProcessor\">MessageProcessor</a>"]],
"xcm_simulator":[],
"xcm_simulator_example":[["impl ProcessMessage for <a class=\"struct\" href=\"xcm_simulator_example/struct.Relay.html\" title=\"struct xcm_simulator_example::Relay\">Relay</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()