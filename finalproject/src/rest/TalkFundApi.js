//setting endpoint for API
const TALKFUNDS_ENDPOINT = 'https://638120a19440b61b0d126e5d.mockapi.io/funds';

//CRUD Verb Methods - API Calls
class TalkFundApi{
  //READ: GET EXISTING DATA (cRud)
    get = async()=> {
        try{
        const resp = await fetch(TALKFUNDS_ENDPOINT);
        const data = await resp.json();
        return data;
     } catch(e) {
        console.log(`Oops, looks like fetchFunds had an issue.`, e);
     }
}
//UPDATE : CHANGE EXISTING DATA (crUd)
    put = async (fund) => {
        try {
        const resp = await fetch(`${TALKFUNDS_ENDPOINT}/${fund.id}`, {
            method: `PUT`,
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(fund)
        });
        return await resp.json();
    }catch(e) {
        console.log(`Oops, looks like updating Funds had an issue`)
        }
    }
//CREATE: POST NEW DATA (Crud)
    create = async (newFund) => {
        try {
            const response = await fetch(TALKFUNDS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFund)
            });
            
            return response;
        } catch (e) {
            console.log("Oops, there was a problem with creating a new fund!", e);
        }
    }
    //DELETE: REMOVE DATA (cruD)
    delete = async (id) => {
        try {
            const response = await fetch(`${TALKFUNDS_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        }
        catch (e) {
            console.log("Oops, there was a problem with deleteing a fund!", e);
        }
    }
}

export const talkFundApi = new TalkFundApi();