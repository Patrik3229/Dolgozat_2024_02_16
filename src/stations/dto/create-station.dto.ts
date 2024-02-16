import { IsIP, IsInt, IsNotEmpty, IsPositive, IsString, Max, Min } from "class-validator";
import { isRegExp } from "util/types";

export class CreateStationDto {
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsIP(4)
  ipAddress: string;

  @IsPositive()
  @IsInt()
  batteryCapacity: number;

  @IsInt()
  @Min(0)
  @Max(100)
  batteryCharge: number = 100;
}
