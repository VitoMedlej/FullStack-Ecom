import {FilesUpload, FileUpload, Widget} from "@uploadcare/react-widget";
import CBox from "../../../../../Components/CustomMui/CBox";
import CTypo from "../../../../../Components/CustomMui/CTypo";


interface IImageForm {
    HandleImagesChange : (array : string[]) => void


}
const ImageForm = ({HandleImagesChange}:IImageForm) => {
    return (
        <CBox sx={{
            pt: '1.5em'
        }}>
            <CTypo sx={{
                mt: '0'
            }} text='Images'></CTypo>
            <Widget
           
            clearable
                multiple
                onFileSelect={async(group : any) => {
                if (group) {

                    const files = await Promise.all(group.files());
                    const urls = files.map((file: { cdnUrl: any; }) => file.cdnUrl);
                  
                    HandleImagesChange(urls)
                }
            }}
                imagesOnly={true}
                multipleMax={10}
        
                publicKey={`${process.env.REACT_APP_UPLOADCARE_API_KEY}`}/>
        </CBox>
    )
}

export default ImageForm