import React from 'react';
import writeIcon from "../../../assets/write.png";
import uncheckWriter from "../../../assets/writer.png";
import checkWriter from "../../../assets/writeractive.png";

function CheckNickname({icon, left, click, submit}) {
  return (
    <>
      <CheckButton left={left} onClick={click}>
          {icon &&
              <InputIcon src={checkWriter} />
          }
          {!icon &&
              <InputIcon src={uncheckWriter} />
          }
      </CheckButton>
      <SubmitButton onClick={submit}>
          <InputIcon src={writeIcon} />
      </SubmitButton>
    </>
  )
}

export default CheckNickname;
