import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CanActivateFn } from "@angular/router";

export const myGuad: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return true;
};
