import { useEffect, useState, type FC, type ReactNode } from "react";

interface TypewriterProps {
	children: ReactNode;
	speed?: number;
	cursor?: boolean;
	onDone?: () => void;
}

const flattenText = (node: ReactNode): string => {
	if (typeof node === "string") return node;
	if (Array.isArray(node)) return node.map(flattenText).join("");
	if (typeof node === "object" && node && "props" in node)
		// @ts-expect-error – we know this is a valid React element
		return flattenText(node.props.children);
	return "";
};

const getDelayForChar = (char: string, baseSpeed: number): number => {
	if (char === " ") return baseSpeed * 0.5;
	if ([",", ";", ":"].includes(char)) return baseSpeed * 1.5;
	if ([".", "!", "?"].includes(char)) return baseSpeed * 2;
	return baseSpeed;
};

const getTextLength = (node: ReactNode): number => {
	if (typeof node === "string") return node.length;
	if (Array.isArray(node)) return node.reduce((acc, child) => acc + getTextLength(child), 0);
	if (typeof node === "object" && node && "props" in node)
		// @ts-expect-error – we know this is a valid React element
		return getTextLength(node.props.children);
	return 0;
};

const renderTypedContent = (node: ReactNode, remaining: { count: number }): ReactNode => {
	if (typeof node === "string") {
		const slice = node.slice(0, remaining.count);
		remaining.count -= slice.length;
		return slice;
	}

	if (Array.isArray(node)) {
		return node.map((child, i) => <span key={i}>{renderTypedContent(child, remaining)}</span>);
	}

	if (typeof node === "object" && node !== null && "props" in node) {
		// @ts-expect-error – we know this is a valid React element
		const typedChildren = renderTypedContent(node.props.children, remaining);
		return <node.type {...(node.props as object)}>{typedChildren}</node.type>;
	}

	return null;
};

const Typewriter: FC<TypewriterProps> = ({ children, speed = 50, cursor = true, onDone }) => {
	const [typedChars, setTypedChars] = useState(0);
	const totalChars = getTextLength(children);
	const fullText = flattenText(children);

	useEffect(() => {
		if (typedChars >= totalChars) {
			onDone?.();
			return;
		}

		const nextChar = fullText[typedChars] ?? "";
		const delay = getDelayForChar(nextChar, speed);

		const timeout = setTimeout(() => {
			setTypedChars((prev) => prev + 1);
		}, delay);

		return () => clearTimeout(timeout);
	}, [typedChars, totalChars, speed, onDone, fullText]);

	return (
		<span>
			{renderTypedContent(children, { count: typedChars })}
			{cursor && <span className="animate-blink inline-block w-[1ch] text-green-400">|</span>}
		</span>
	);
};

export default Typewriter;
