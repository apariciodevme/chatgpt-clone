import NewChat from "./NewChat";

export const SideBar = () => {
  return (
    <div className="flex flex-col min-h-screen p-2">
      <div className="flex-1">
        <div>
          {/*New chat button */}
          <NewChat/>

          <div>{/*Model selection component*/}</div>

          {/*map chat rows*/}
        </div>
      </div>
    </div>
  );
};
