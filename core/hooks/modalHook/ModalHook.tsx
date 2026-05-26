import { ModalType } from "@/core/types/global";

function ModalHook({ openModal, children }: ModalType) {
  return (
    <>
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#17191B99]/40 backdrop-blur-sm transition-opacity flex items-center justify-center">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalHook;
