import { useState, useEffect, useRef } from 'react';
// components
import { Button, Select } from '../';
//constants
import { FILE_TYPE_LIST, FILE_NAMES, REPO_URL, LOCAL_FOLDER, BRANCH, bash } from '../../utils/constants';
import { BashStyles } from './BashStyles';

const Bash = () => {
  const [fileType, setFileType] = useState('text');
  const [downloadURL, setDownloadURL] = useState(null);
  const doFileDownload = useRef();      
  const BASH = bash(REPO_URL, LOCAL_FOLDER, BRANCH);
  
  const download = (e) => {
      e.preventDefault();
      // Prepare the file
      let output;
      if (fileType === "json") {
        output = JSON.stringify(BASH, null, 4);
      
      } else {
        // Prepare data:
        output = '' + BASH;
      }
       // Download it
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    setDownloadURL(fileDownloadUrl);      
  }  

  useEffect(() => {
    if (downloadURL) {
      doFileDownload.current.click(); 
      URL.revokeObjectURL(downloadURL);  // free up storage--no longer needed.
      setDownloadURL('');
    }    
  },[downloadURL])
    
  return(
    <BashStyles>
      <h3> Bash / Git </h3>           
      <div>
        <p>Napisati bash skriptu koja ce (skripta ne mora da radi sve inline, moze korak po korak):</p>
        <ol>
          <li> Klonirati bilo koji repozitorujum sa GitHub </li>
          <li> Preci u kreirani direktorijum </li>
          <li> Kreirati granu __test__ i preci na nju </li>
          <li> Kreirati fajl i ubaciti u njega bilo kakav sadrzaj </li>
          <li> Dodati kreirani fajl na staging </li>
          <li> Logovati output "git status" komande u konzolu </li>
        </ol>
     </div>
      <pre>{BASH}</pre>
      <div className='buttons'>
        <Select optionsList = {FILE_TYPE_LIST} setOption = {setFileType} name = "types"/>
        <Button handleOnClick={download} text='Download'/>     
        <a 
          className="hidden"
          target='_blank'
          rel="noreferrer"
          download={FILE_NAMES[fileType]}
          href={downloadURL}
          ref={e=>doFileDownload.current = e}
          >download it
        </a>        
      </div>
    </BashStyles>
  )
};

export default Bash;