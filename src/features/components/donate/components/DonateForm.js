import { useRef, useState, useEffect } from "react";
import Form from "../../../../base/components/Form";

const DonateForm = ({ formSubmitHandler, isMinSum }) => {
  const [amount, setAmount] = useState(50);
  const [isInvalid, setIsInvalid] = useState(false);

  const donationRef = useRef();

  useEffect(() => {
    if (isMinSum) {
      donationRef.current.focus();
    }

    if (isInvalid) {
      setTimeout(() => {
        setAmount(50);
        setIsInvalid(false);
      }, 1000);
    }
  }, [isMinSum, isInvalid]);

  const changeHandler = (e) => {
    const donationAmount = donationRef.current.value;
    console.log("donationAmount: ", donationAmount);
    if (donationAmount.match(/[A-Za-z]/g)) {
      setIsInvalid(true);
    }
    setAmount(() => donationAmount);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const donationValue = donationRef.current.value;
    formSubmitHandler(+donationValue);
    setAmount("");
    donationRef.current.focus();
  };

  return (
    <Form
      style={{
        border: isInvalid && "1px solid red",
        background:
          isInvalid && "linear-gradient(359deg, #ffa7a1, rgb(242 230 226))",
      }}
      onSubmit={submitHandler}
      isMinSum={isMinSum}
      isInvalid={isInvalid}
    >
      <label>
        <strong>$</strong>
      </label>
      <input
        type="text"
        value={amount}
        onChange={changeHandler}
        ref={donationRef}
        disabled={!isMinSum}
      />
      <input
        style={{
          background:
            isInvalid &&
            "linear-gradient(359deg, rgb(253 90 79), rgb(242, 230, 226))",
        }}
        type="submit"
        value="Give Now"
        disabled={!isMinSum ? true : false}
      />
    </Form>
  );
};

export default DonateForm;
