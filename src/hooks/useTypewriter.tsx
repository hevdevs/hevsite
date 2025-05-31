import { useState, useEffect, useMemo } from "react";

const useTypewriter = (text: String[], speed = 50) => {
	const [charIndex, setCharIndex] = useState(0);
	const [dialogueIndex, setDialogueIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);

	const displayText = useMemo(
		() => text[dialogueIndex].slice(0, charIndex),
		[charIndex]
	);
	function nextLine() {
		text[dialogueIndex + 1]
			? setDialogueIndex((i) => i + 1)
			: setDialogueIndex(0);
		setCharIndex(0);
		setIsTyping(true);
	}
	useEffect(() => {
		if (charIndex === text[dialogueIndex].length) {
			setIsTyping(() => false);
			return;
		}
		const timeoutId = setTimeout(() => {
			setCharIndex((i) => i + 1);
		}, speed);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [charIndex, dialogueIndex, speed]);

	return { nextLine, displayText, isTyping };
};

export default useTypewriter;
