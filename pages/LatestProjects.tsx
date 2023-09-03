import fs from 'fs'
import { join } from 'path'
import getConfig from 'next/config'

export default function LatestProjects() {

    const dir = join(process.cwd(),'projects')
    const slugs=  fs.readdirSync(dir)
    
    return (<ul>{slugs.map(slug=><li>{slug}</li>)}</ul>)

}