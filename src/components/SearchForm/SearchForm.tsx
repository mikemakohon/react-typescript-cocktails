import {useGlobalContext} from "../../context/AppContext";
import {SyntheticEvent, useCallback} from "react";

export const SearchForm = () => {
    const {setSearchTerm, searchTerm} = useGlobalContext();

    const handleChange = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
        if (setSearchTerm && typeof setSearchTerm === "function") {
            setSearchTerm(event.currentTarget.value);
        }
    }, [setSearchTerm])
    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange}/>
        </div>);
};
