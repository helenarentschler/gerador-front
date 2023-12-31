import resolver from "./resolver";
import Cookies from 'js-cookie';

export async function postDiretorio(nome) {
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': Cookies.get('token')
        },
        // Convertendo o objeto de dados em uma string JSON
        body: JSON.stringify({
            'nome': nome,
        }), 
    };

    return await resolver(fetch("http://localhost:8080/diretorio/criar", requestOptions)
        
        .then(res => {
            
            if(!res.ok) {
                throw Error("Nao foi possivel criar diretorio");
            }
            
            return res.text();
        })
    )
}

export async function readDiretorio(nome) {
    
    const requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': Cookies.get('token')
        },
    };

    return await resolver(fetch(`http://localhost:8080/diretorio/ler/${nome}`, requestOptions)
        
        .then(res => {
            
            if(!res.ok) {
                throw Error("Nao foi possivel ler diretorio");
            }
            
            return res.text();
        })
    )
}

