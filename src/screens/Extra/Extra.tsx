import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react';
//import axios from "axios";

const Extra: React.FC<ExtraProps> = (props) => {
    //const [datax,setDatax] = useState(); 
    //const [users,setUsers] = useState([]);  
    const [legend,setLegend] = useState('This is the legend');  
    //const [folksArray,setFolksArray] = useState([]); 
    //const [usersArray,setUsersArray] = useState([]);
    //const url = "/rrr/peopleapi";  

    const helmet = useHelmet();

    
    useEffect(() => {
        helmet.setTitle("Extra")
    },[helmet])

    return (
        <>
            <h1>Extra</h1>
            <p>{legend}</p>
           

          <p>qwwwertyuiogggggghhjhhjjkkll</p>
        </>
    )
}

interface ExtraProps {
    [key: string]: any
}

export default Extra;

