import React, {useEffect, useState} from "react";
import './Tags.css';

function Tags({tags, tagsArr, tagsList}) {
    // const [tags, setTags] = useState(['Theme #1', 'Theme #2', 'Theme #3', 'Theme #4', 'Theme #5', 'Theme #6']);

    function addTags(event) {
        const value = event.target.getAttribute('data-value');
        if (!tagsArr.includes(value)) {
            tagsArr.push(value);
        }
        tagsList(tagsArr);
    };

    function deleteTags(event) {
        const deleteButton = event.target.getAttribute('data-name');
        const filteredArray = tagsArr.filter(tag => tag !== deleteButton);
        tagsList(filteredArray);
    };

    useEffect(() => {
        const tagsListBtn = document.querySelector('.tags__btn');
        tagsListBtn.addEventListener('click', function () {
            const tagsList = document.querySelector('.tags__options');
            tagsList.classList.toggle('open');
        });
    }, []);

    return (
        <div className="tags">
            <span className="tags__name">Theme</span>

            <ul className="tags__list">
                {tagsArr.map((tag, index) =>
                    <li className="tags__list_item" key={index}>
                        <span>{tag}</span>
                        <div className="delete" onClick={deleteTags} data-name={tag}>&#215;</div>
                    </li>
                )}
            </ul>

            <div className="select">
                <div className="tags__select">
                    <span>Select a topic</span>
                    <button className="tags__btn" type="button">&#9660;</button>
                </div>

                <div className="tags__options">
                    {tags.map((tag, index) =>
                        <span
                            className="tags__option"
                            onClick={addTags}
                            data-value={tag}
                            key={index}>{tag}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tags;
