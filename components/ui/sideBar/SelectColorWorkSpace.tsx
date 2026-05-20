import ModalHook from "@/core/hooks/modalHook/ModalHook";

type ModalType = {
  workspaceColor: boolean;
  setWorkspaceColor: (value: boolean) => void;
};

function SelectColorWorkSpace({
  workspaceColor,
  setWorkspaceColor,
}: ModalType) {
  return <>
    <ModalHook openModal={workspaceColor}>
        <div className="w-125 h-72 bg-white rounded-lg"></div>
    </ModalHook>
  </>;
}

export default SelectColorWorkSpace;
