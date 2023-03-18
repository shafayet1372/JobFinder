

const uuid = (data) => {

    return data.map(x=>x.id).sort((a,b)=>b-a)[0]+1
}
export default uuid