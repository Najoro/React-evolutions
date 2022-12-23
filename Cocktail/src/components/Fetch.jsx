import { useState , useEffect } from 'react';

const Fetch = (search,url) => {
    const [infetch, setFetch] = useState({
        items : [], 
        loading : true
      });
    useEffect(function(){
      (async () => {
        const response = await fetch(url);
        const responseData = await response.json();
  
        if(response){
          setFetch({
            items : responseData,
            loading : false
          })
        }else {
          alert("erreur au niveaux de l'API")
        }
      })();
    }, [search])
  
    return (infetch);
};

export default Fetch;