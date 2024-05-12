import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";


const Card = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="py-2" >
          <div className="px-4">
            {/* DADOS MÉDICO  PACIENTE */}
            <div className="flex flex-col gap-2">
              {/* MÉDICO */}
              <div className="flex flex-col items-start justify-start leading-5">
                <p>Nome do médico/ paciente</p>
                <p className="flex gap-1 text-[#a7a7a7] text-sm font-normal" >
                  <span>Ginecologista |</span>
                  <span>CRM  15.879-SP</span>

                </p>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex gap-2 px-4 flex-col">
          <div className="flex flex-col text-[#a7a7a7]">
            <span>e-mail</span>
            <span>cpf</span>
            <div className="flex flex-col py-1">
              <span>rua</span>
              <span>cidade/uf</span>
              <span>cep</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size={"sm"} className="flex-1 bg-transparent border-primary border text-primaryBlue text-base font-normal">
              Editar
            </Button>
            <Button size={"sm"} className="flex-1 bg-transparent border-primary border text-primaryBlue text-base font-normal ">
              Desativar perfil
            </Button>

          </div>
        </AccordionContent>
      </AccordionItem>
      <Separator />

    </Accordion>
  );
}

export default Card;