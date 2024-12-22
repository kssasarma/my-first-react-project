import { getRandomInt } from "../../util/Helper";
import { reactDescriptions } from "../../util/Helper";
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
function Header() {
	const description = reactDescriptions[getRandomInt(2)];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are going to
				build!
			</p>
		</header>
	);
}

export default Header;
