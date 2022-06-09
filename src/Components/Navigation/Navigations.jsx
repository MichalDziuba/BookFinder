import { NavLink } from "react-router-dom";
import styles from './Navigations.module.css'
export const Navigation = () => {

   return (
     <div className={styles.navigation}>
       <NavLink
         className={styles.navigation_Link}
         style={({ isActive }) => {
           return {
             display: "block",
             morgin: "1rem 0",
             color: isActive ? "rgba(33, 150, 243, 1)" : "",
           };
         }}
         to={`/`}
       >
         Home
       </NavLink>
       <NavLink
         className={styles.navigation_Link}
         style={({ isActive }) => {
           return {
             display: "block",
             morgin: "1rem 0",
             color: isActive ? "rgba(33, 150, 243, 1)" : "",
           };
         }}
         to={`/search`}
       >
         Search
       </NavLink>
       <NavLink
         className={styles.navigation_Link}
         style={({ isActive }) => {
           return {
             display: "block",
             morgin: "1rem 0",
             color: isActive ? "rgba(33, 150, 243, 1)" : "",
           };
         }}
         to={`/favorites`}
       >
         Favorites
       </NavLink>
     </div>
   );
}