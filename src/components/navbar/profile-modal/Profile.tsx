import { Link } from "react-router-dom";
import { navigation_List } from "../../../utils/navigationList";
import { Avatar, AvatarImage } from "../../ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";




function Profile() {
  return (
    <NavigationMenu >
      <NavigationMenuList >
        <NavigationMenuItem
          // style={{ border: "3px solid red" }}
          // className=" w-[10rem]"
        >
          <NavigationMenuTrigger>
            <Avatar>
              <AvatarImage src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png" />
            </Avatar>
          </NavigationMenuTrigger>

          <NavigationMenuContent
            style={{ border: "3px solid red" }}
            className="flex flex-col min-w-[10rem]"
          >
            {navigation_List.map((item) => (
              <Link key={item.title} to={item.link}>
                <NavigationMenuLink
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Profile


