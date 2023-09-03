import fs from 'fs'
import { join } from 'path'
import getConfig from 'next/config'

export function getStaticProps() {

    const projectsDir = join(process.cwd(), "projects");
    const files = fs.readdirSync(projectsDir);

    // let projects = files.map((filename) => {
    //     const slug = filename.replace(/\.md$/, '')
    //     // const fullpath = join(projectsDir,'${slug}.md')
    //     // const readFile = fs.readFileSync(fullpath,'utf8')
    //     // const {data: frontmatter} = matter(readFile)}
    //     return { slug };
    // }
    // )

    return {
        props: {
            files
        }
    }
}

export default function LatestProjects() {

    const sp = getStaticProps()

    return (<ul>{<li>{sp.props.files}</li>}</ul>)

}
