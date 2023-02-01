import { IMongoDBBody } from "./mongodb"

export interface ICategory extends IMongoDBBody {
  name: string
  slug: string
}
