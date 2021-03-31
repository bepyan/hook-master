import { useEffect, useState } from "react";

export default initialState => {
    const [title, setTitle] = useState(initialState);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerHTML = title;
    }

    useEffect(updateTitle, [title])

    return setTitle;
}
