import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react"


const PartnerCard = ({
    nome,
    logo,
}) => {
  return (
    
       <Card >
           <CardBody className="text-center">{nome}</CardBody>
           <CardFooter>
               <Image alt="" src={logo}/>
           </CardFooter>
       </Card>

  )
}

export default PartnerCard