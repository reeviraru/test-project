import React from "react";
import Button from "./UI/Button/Button";

function PostFilter({tags, setFilter}) {

    function filter() {
        const filterList = [];
        const selected = document.querySelectorAll('input.filter__option_input:checked');
        selected.forEach((checkbox) => filterList.push(checkbox.getAttribute('data-value')));
        setFilter(filterList);
    }

    return (
        <div className="posts__filter">
            <h2>Posts filter</h2>
            <div className="filter">
                <div className="filter__options">
                    {tags.map((tag, index) => 
                        <label className="filter__option" key={index}>
                            <input
                                type="checkbox"
                                className="filter__option_input"
                                data-value={tag}/>
                            <div className="checkbox-custom"></div>
                            <span>{tag}</span>
                        </label>
                    )}
                </div>
                <Button
                    type='button'
                    theme='dark border'
                    text='Sort'
                    onClick={filter}/>
            </div>
        </div>
    );
}

export default PostFilter;