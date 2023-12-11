import React, { memo, useEffect, useState } from "react";
import useWindowSize from "../../common/windowsize/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";
interface ButtonProps {
  onMouseEnter ? : ()=> void ;
  onMouseLeave ? : ()=> void ;
  id?: string;
  className?: string | "";
  buttonText: string;
  isLoading?: boolean | false;
  loadingText?: string | "loading";
  disabled?: boolean | false;
  onClick?: () => void;
  type: any | "submit";
  outlineType?: boolean | false;
  icon?: any;
  color?: string;
  borderRadius?: string;
  minWidth?: string;
  padding?: string; // "0 0 0 0" (top right bottom left)
  bgColor?: string;
  internalDisabled?: boolean | false ;
}

const BasicButton: React.FC<ButtonProps> = ({
  id,
  className,
  type,
  isLoading,
  buttonText,
  loadingText,
  disabled,
  onClick,
  outlineType,
  icon,
  color,
  borderRadius,
  minWidth,
  padding,
  bgColor,
  internalDisabled,
  onMouseEnter,
  onMouseLeave
}) => {
  const isLargeDevice = useWindowSize();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const handleClickThis = () => {

    if(internalDisabled){

      setIsDisabled(true);
      setIsLoadingBtn(true) ;

      setTimeout(() => {
        setIsDisabled(false);
        setIsLoadingBtn(false)
      }, 5000);
  
    }  
    if (onClick) {
      onClick();
    }
  };


  return (
   <>
     
      {isLoadingBtn ? (
      //  <button className="btn bg-white rounded-2 mb-2 mx-2 " style={{width:'100px' ,height:'45px' ,border:'1px solid teal' ,cursor:"wait" }}>
      <button className="btn bg-white rounded-2 mb-2 me-2 " style={{width:'100px' ,height:'43px' ,border:'1px solid teal' ,cursor:"wait" }}>
          <span
            // style={{ 
            //   fontSize: isLargeDevice ? "8px" : "8px",
            // }}
            >  <Spinner /> </span> 
        </button>
      ) : (
       <button
          
          className={`btn btn-${outlineType ? "outline-" : ""}${className} rounded-1`}
          type={type}
          onClick={handleClickThis}
          // disabled={disabled}
          disabled={disabled || isDisabled}
          id={id}
          style={{ background: bgColor ,height:'39px'}}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
     >
      {icon}
        <span
          style={{ 
            fontSize: isLargeDevice ? "16px" : "13px",
            color: color && ` ${color} `,
            borderRadius: borderRadius && `${borderRadius}px`,
            minWidth: minWidth && `${minWidth}px`,
            padding: padding && `${padding}`,
          }}
        >
          {buttonText}
        </span>
      
       </button>
    )}
   </>
  );
};

export default memo(BasicButton);

