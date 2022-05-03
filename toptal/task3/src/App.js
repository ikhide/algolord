import classnames from "classnames";
// you should import `lodash` as a whole module
import lodash from "lodash";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";

const ITEMS_API_URL = "https://example.com/api/items";
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function App() {
  const [searchResult, setSearchResult] = useState(["money", "car"]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (e) => {
    try {
      setIsLoading(true);
      const q = e.target.value;
      const request = await axios.get(`https://example.com/api/items?${q}`);
      const response = request.data;
      setSearchResult(response);
      setIsLoading(false);
    } catch (e) {
      console.log("There was an err", e);
      setIsLoading(false);
    }
  };

  const debouncedChangeHandler = useMemo(
    () => lodash.debounce(handleChange, 500),
    []
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  const onSelectItem = (item) => null;

  return (
    <div className="wrapper">
      <div className={`control ${isLoading ? "is-loading" : ""}`}>
        <input
          type="text"
          className="input"
          onChange={debouncedChangeHandler}
        />
      </div>
      {searchResult.length > 0 && (
        <div className="list is-hoverable">
          {searchResult.map((word, i) => {
            return (
              <>
                <a onSelectItem={onSelectItem} key={i}>
                  {word}
                </a>
                <br />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
