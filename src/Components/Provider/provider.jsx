export default function Provider(data){
    const service = data.data;
    return(
        <>
            <div className="provider">
        		<img className="provider-img" src={service["logo_path"]} alt="provider-img" />
                <h3>{service["provider_name"]}</h3>
        	</div>
        </>
    );
}