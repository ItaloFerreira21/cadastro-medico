import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

import { Button } from "../ui/button";

const ConsultationCard = () => {
  return (
    <div className="">
      <h3 className="flex gap-3 items-center">
        <p className="text-xl font-medium text-[#85C4FF]">
          Hoje (18/08/2022)
        </p>
        <img src="./iconClinica.svg" alt="" />
      </h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger >
            <div className="px-4">
              <div className="flex flex-col">
                <div className="">
                  <h1 className="text-start">9h00</h1>
                </div>
              </div>
              {/* DADOS MÉDICO & PACIENTE */}
              <div className="flex flex-col gap-2">
                {/* MÉDICO */}
                <div className="flex flex-col items-start justify-start leading-5">
                  <p>Adriano Moreira Sales</p>
                  <p className="flex gap-1 text-[#a7a7a7] text-sm font-normal" >
                    <span>Ginecologista |</span>
                    <span>CRM  15.879-SP</span>
                  </p>
                </div>
                {/* PACIENTE */}
                <div >
                  <div className="flex flex-col items-start justify-start leading-5">
                    <p>Marcela Trindade</p>
                    <p className="flex gap-1 text-[#a7a7a7] text-sm font-normal" >
                      <span>Paciente</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex gap-2 px-4">
            <Button size={"sm"} className="flex-1 bg-transparent border-primary border text-primaryBlue text-base font-normal">
              Editar
            </Button>
            <Button size={"sm"} className="flex-1 bg-transparent border-primary border text-primaryBlue text-base font-normal">
              Cancelar consulta
            </Button>
          </AccordionContent>

        </AccordionItem>
        <Separator className="bg-[#3f404b9c] " />
      </Accordion>
    </div>

  );
}

export default ConsultationCard;