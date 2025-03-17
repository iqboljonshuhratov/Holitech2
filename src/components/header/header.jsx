import React from "react";

const Header = () => {
  return (
    <div className="w-full py-[10px] px-[20px] bg-[#cb67a5] text-center text-white flex justify-center items-center gap-[10px] ">
      <img
        className="w-10" // 40px ga teng
        src="https://optim.tildacdn.one/tild6332-3133-4439-b836-396337323565/-/resize/96x/-/format/webp/noroot.png"
        alt=""
        data-original="https://static.tildacdn.one/tild6332-3133-4439-b836-396337323565/noroot.png"
      />

      {/* <img
        class="tn-atom__img t-img loaded w-[40px]"
        data-original="https://static.tildacdn.one/tild6332-3133-4439-b836-396337323565/noroot.png"
        alt=""
        imgfield="tn_img_1739995700322"
        src="https://optim.tildacdn.one/tild6332-3133-4439-b836-396337323565/-/resize/96x/-/format/webp/noroot.png"
      ></img> */}
      <h1 className="leading-[36px] text-2xl ">obunsha ltd.</h1>
    </div>
  );
};

export default Header;
