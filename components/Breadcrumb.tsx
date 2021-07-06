import { Breadcrumb, BreadcrumbItem } from "react-bootstrap"
import Link from 'next/link'
import { useRouter } from 'next/router'

type CrumbData = {
    title: string,
    path: string
}[]

function toTitleCase(str: string) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}


export default function Breadcrump() {
    const path = useRouter().asPath
    const crumbs = path.split("/")
    crumbs[0] = "Home"

    var trail: CrumbData = []
    var individualPath = "/"

    crumbs.map(crumb => {
        if (crumb != "Home") {
            individualPath += crumb
            individualPath += "/"
        }

        trail.push({
            title: toTitleCase(crumb.replace("-", " ")),
            path: individualPath
        })
    })


    return (
        <Breadcrumb>
            {trail.map(trailItem => (
                <BreadcrumbItem key={trailItem.title}>
                    <Link href={trailItem.path}>
                        <a>{trailItem.title}</a>
                    </Link>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    )
}
