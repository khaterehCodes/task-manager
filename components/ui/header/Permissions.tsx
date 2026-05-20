import { PermissionsHeader } from "@/core/types/global";
import React from "react";
import P from "../customP/P";
import { permissions } from "@/core/constants/global";

function Permissions({
  openPermission,
  setOpenPermissions,
  setShowPermission,
}: PermissionsHeader) {
  const permissionShowHandler = (p: string) => {
    setOpenPermissions(false);
    setShowPermission(p);
  };
  return (
    <>
      {openPermission && (
        <div className="absolute inset-0 bg-[#5a5e6299] backdrop-blur-sm transition-opacity flex items-center justify-center">
          <div className="w-63 h-100 bg-white rounded-lg flex flex-col p-5 justify-evenly">
            {permissions.map((item) => (
              <React.Fragment key={item.id}>
                <div
                  onClick={() => permissionShowHandler(item.title)}
                  className="w-full h-fit flex flex-col items-start gap-2 border-b border-[#F4F4F4] cursor-pointer"
                >
                  <P className="text-[12px] font-extrabold">{item.title}</P>
                  <P className="text-[12px] text-[#3D3D3D] mb-3">
                    {item.permission}
                  </P>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Permissions;
