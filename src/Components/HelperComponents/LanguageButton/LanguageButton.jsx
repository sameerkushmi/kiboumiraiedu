import { FloatButton } from "antd";
import FloatButtonGroup from "antd/es/float-button/FloatButtonGroup";
import { LanguagesIcon } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../../../Context/Context";

const LanguageButton = () => {

  const {setLanguage} = useContext(LanguageContext) 

  const onLanguageChange = (value) =>{
    setLanguage(value)
  }

  return (
    <div>
        {/* language change floating button */}
        <FloatButtonGroup
          trigger="hover"
          type="transparet"
          icon={
            <div className="flex items-center justify-center h-[100%] w-[100%]">
              <LanguagesIcon color="white"/>
            </div>
          }
          className="shadow-lg bg-orange-500"
          style={{ insetInlineEnd: 50 }}
          shape="circle"
          placement="left"
        >
          <FloatButton
            onClick={()=>onLanguageChange('en')}
            tooltip="English" 
            icon={
               <div className="flex items-center justify-center h-[100%] w-[100%]">
                <img src="/Uploads/flag/en.png" alt="en.png" className="w-[100%] object-cover" />
              </div>
            }
          />
          <FloatButton
            onClick={()=>onLanguageChange('jp')}
            tooltip="japan" 
            icon={
               <div className="flex items-center justify-center h-[100%] w-[100%]">
                <img src="/Uploads/flag/jp.png" alt="en.png" className="w-[100%] object-cover" />
              </div>
            }
          />
        </FloatButtonGroup>
    </div>
  )
}

export default LanguageButton