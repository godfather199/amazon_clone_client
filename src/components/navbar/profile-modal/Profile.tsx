import { Link, useNavigate,  } from "react-router-dom";
import {logged_Out_Navigation_List, logged_In_Navigation_List } from "../../../utils/navigationList";
import { Avatar, AvatarImage } from "../../ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";




function Profile() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const {data: logged_In_User} = useQuery({queryKey: ["logged_In_User_State"]})
  // console.log("Profile: ", logged_In_User)

  const handle_Logout = () => {
    queryClient.removeQueries({
      queryKey: ["logged_In_User_State"],
      exact: true,
    });

    navigate("/")
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
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
            className="flex flex-col min-w-[10rem] bg-white"
          >
            {logged_In_User ? (
              <>
                {logged_In_Navigation_List.map((item) => (
                  <Link key={item.title} to={item.link}>
                    {item.title}
                  </Link>
                ))}

                <Button size= 'sm' onClick={handle_Logout}>Logout</Button>
              </>
            ) : (
              <>
                {logged_Out_Navigation_List.map((item) => (
                  <Link key={item.title} to={item.link}>
                    {item.title}
                  </Link>
                ))}
              </>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Profile


