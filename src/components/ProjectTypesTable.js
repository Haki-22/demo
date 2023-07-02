import { ProjectTypesTableRow } from './ProjectTypesTableRow';
import { AddTypeRow } from './AddTypeRow';

/**
 * Table component used to display a list of projectTypes
 * 
 * @component
 * @param {Object[]} projectTypes - An array of project types.
 * @param {Object} actions - Actions object for performing operations on project types.
 * @returns {JSX.Element} The rendered ProjectTypesTable component.
 */
export const ProjectTypesTable = ({ projectTypes, actions }) => {
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Název</th>
                    <th>Název anglicky</th>
                    <th>Nástroje</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {projectTypes.length > 0 ? 
                ( <>
                    
                    {projectTypes.map((project, index) => (
                        <ProjectTypesTableRow key={project.id} projectType={project} index={index + 1} actions={actions}/>
                    ))}
                    
                </> ) : 
                (
                    <tr>
                        <td colSpan={6}>No projectTypes found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
