import { Search } from "lucide-react";
import { HeaderPage } from "./header";
import { RegisterNewProfile } from "./registerNewProfile";
import { ReactElement } from "react";
interface BasisPageProps {
  headerTitle: string
  formComponent: ReactElement
  basisContent: ReactElement
  textButton: string
}
export const BasisPage = ({ headerTitle, formComponent, basisContent, textButton }: BasisPageProps) => {
  return (
    <div className="w-full overflow-w-hidden">
      <HeaderPage headerTitle={headerTitle} />
      <div className="p-4">
        <div className="flex w-full border border-neutral-700 justify-between p-4 rounded-[6px] ">
          <input
            type="text"
            placeholder="Pesquisar"
            className="placeholder:text-gray-600 w-[89%] outline-none"
          />
          <Search className="text-gray-600" />
        </div>
        {basisContent}
      </div>
      <RegisterNewProfile formComponent={formComponent} textButton={textButton} />
    </div>
  );
};
