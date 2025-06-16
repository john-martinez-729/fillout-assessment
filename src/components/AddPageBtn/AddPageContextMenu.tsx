import { pageTypes, pageTypeMeta } from "../../constants/pageTypes";
import { PageType } from "../../constants/pageTypes";

type AddPageContextMenuProps = {
  onSelect: (pageType: PageType) => void;
};

const AddPageContextMenu: React.FC<AddPageContextMenuProps> = ({
  onSelect,
}) => {
  return (
    <>
      {pageTypes.map((pageType) => {
        const IconComponent = pageTypeMeta[pageType.iconKey].icon;

        return (
          <div
            key={pageType.label}
            onClick={() => onSelect(pageType)}
            className="flex items-center mb-1 hover:bg-gray-50 p-2 bg-white cursor-pointer"
          >
            <div
              className="rounded-[4px] border-[0.5px] p-[6px] py-1"
              style={pageType.iconStyle}
            >
              <IconComponent />
            </div>
            <div className="ml-3">
              <div className="font-medium leading-4">
                {pageType.label}
                {pageType.premium && (
                  <span className="inline-flex py-0.5 rounded-full font-medium text-xs px-2 bg-gray-100 text-gray-800 ml-1">
                    Premium
                  </span>
                )}
              </div>
              <div className="text-gray-500 text-sm text-align-start">
                {pageType.description}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AddPageContextMenu;
