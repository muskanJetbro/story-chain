import memopoolStyles from "../styles/pages/Memopool.module.scss";
import React, { useState } from "react";

function memopool() {
  const [text, updateText] = useState("");

  return (
    <div className={`${memopoolStyles.memopool}`}>
      <div className={`${memopoolStyles.memopool__container1}`}>
        <div className={`${memopoolStyles.memopool__container1__header}`}>
          CHAIN ID
        </div>
        <a className={`${memopoolStyles.memopool__container1__ID}`}>
          /[chainid]
        </a>
        <div className={`${memopoolStyles.memopool__container1__activenodes}`}>
          Active nodes (1)
        </div>
        <div className={`${memopoolStyles.memopool__container1__userID}`}>
          0x823abd769 (YOU)
        </div>
      </div>
      <div className={`${memopoolStyles.memopool__container2}`}>
        <div className={`${memopoolStyles.memopool__container2__header}`}>
          - START -
        </div>
        <div className={`${memopoolStyles.memopool__container2__btn}`}>
          MINE
        </div>
      </div>
      <div className={`${memopoolStyles.memopool__container3}`}>
        <div className={`${memopoolStyles.memopool__container3__header}`}>
          Memopool
        </div>
        <div className={`${memopoolStyles.memopool__container3__output}`}>
          {text}
        </div>
        <input
          className={`${memopoolStyles.memopool__container3__input}`}
          id="text-input"
          placeholder="Enter text"
          type="text"
          onKeyUp={({ target }) => updateText(target.value)}
        />
      </div>
    </div>
  );
}

export default memopool;
