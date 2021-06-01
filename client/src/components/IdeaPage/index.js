import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import ReactBeautifulDND from "../ReactBeautifulDND";
import Modal from "../Modal";
import IdeaPageHeader from "../IdeaPageHeader";
import ResetButton from "../ResetButton";
import IdeaPageTips from "../IdeaPageTips";
import randomWords from "random-words";
import { v4 as uuidv4 } from "uuid";

function IdeaPage() {
	const [open, setOpen] = useState(true);
	const history = useHistory();
	const auth = useAuth();
	const [randomOptions, setRandom] = useState(randomWords(5));
	const [seletedWords, setWords] = useState([]);
	const itemsFromGenerator = [
		{ id: uuidv4(), content: randomOptions[0] },
		{ id: uuidv4(), content: randomOptions[1] },
		{ id: uuidv4(), content: randomOptions[2] },
		{ id: uuidv4(), content: randomOptions[3] },
		{ id: uuidv4(), content: randomOptions[4] },
	];

	const columnsFromBackend = {
		[uuidv4()]: {
			name: "My Words",
			items: itemsFromGenerator,
		},
		[uuidv4()]: {
			name: "My Idea Map",
			items: [],
		},
	};
	const [columns, setColumns] = useState(columnsFromBackend);

	const handleSave = (e) => {
		setWords([...seletedWords, e.target.value]);
		console.log(columnsFromBackend);
		console.log(columns);
		console.log(seletedWords);
		setColumns(...seletedWords, {
			id: uuidv4(),
			content: seletedWords,
		});
	};

	return (
		<>
			<div className="items-center">
				<IdeaPageHeader onClick={() => setOpen(true)} />
				<ReactBeautifulDND columnData={itemsFromGenerator} setColumn={setColumns} />
				<ResetButton />
				<IdeaPageTips />
				<Modal
					randomWords={randomOptions}
					show={open}
					onClick={() => setOpen(false)}
					handleRandom={() => setRandom(randomWords(5))}
					handleSave={(e) => {
						handleSave(e);
					}}
				/>

				{/* hide actions if user is logged in */}
				{!auth.isLoggedIn() && (
					<>
						<button onClick={() => history.push("/login")}></button>
						<button onClick={() => history.push("/signup")}></button>
					</>
				)}
			</div>
		</>
	);
}

export default IdeaPage;
