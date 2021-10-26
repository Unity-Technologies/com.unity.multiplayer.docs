import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
});

const Mermaid = ({ chart }) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div className="mermaid">{chart}</div>;
};

export default Mermaid;
// Need to add some code for detecting dark/light mode and loading that theme.
// Mermaid JS ticket https://github.com/mermaid-js/mermaid/issues/1544