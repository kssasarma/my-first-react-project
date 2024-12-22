import { CORE_CONCEPTS } from "../../util/data.js";
import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import Section from "../Section/Section.jsx";
function CoreConcepts() {
	return (
		<Section id="core-concepts" title="Core Concepts">
			<h2></h2>
			<ul>
				{CORE_CONCEPTS.map((conceptItem) => (
					<CoreConcept {...conceptItem} />
				))}
			</ul>
		</Section>
	);
}

export default CoreConcepts;
