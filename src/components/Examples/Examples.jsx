import TabButton from "../TabButton/TabButton";
import { tabOptions } from "../../util/Helper";
import { useState } from "react";
import { EXAMPLES } from "../../util/data";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
function Examples() {
	const [selectedTopic, setSelectedTopic] = useState({});
	function clickHandler(selectedString) {
		setSelectedTopic(EXAMPLES[selectedString]);
	}
	return (
		<Section id="examples" title="Examples!!!">
			<Tabs
				buttons={tabOptions.map((tabOption) => (
					<TabButton
						isSelected={tabOption === selectedTopic.title}
						onClick={() => clickHandler(tabOption)}
					>
						{tabOption}
					</TabButton>
				))}
			>
				{selectedTopic ? (
					<div id="tab-content">
						<h3>{selectedTopic.title}</h3>
						<p>{selectedTopic.description}</p>
						<pre>
							<code>{selectedTopic.code}</code>
						</pre>
					</div>
				) : (
					<p>Please select a topic</p>
				)}
			</Tabs>
			<menu></menu>
		</Section>
	);
}
export default Examples;
