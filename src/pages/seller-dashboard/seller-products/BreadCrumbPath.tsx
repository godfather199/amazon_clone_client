import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

type BreadCrumbPathType = {
    previousPage: {
        title: string,
        path: string
    }[];
    currentPage: string;
}


function BreadCrumbPath({ previousPage, currentPage }: BreadCrumbPathType) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {previousPage.map((item) => (
          <BreadcrumbItem key={item.path}>
            <BreadcrumbLink href={item.path}>{item.title}</BreadcrumbLink>
            <ChevronRight />
          </BreadcrumbItem>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbPath;
