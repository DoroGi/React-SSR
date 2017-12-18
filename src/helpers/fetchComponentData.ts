export default (dispatch, components) => {
    const getRequirements = (prev, current) => current ? (current.requirements || []).concat(prev) : prev
    const requirements = components.reduce(getRequirements, []);
    const promises = requirements.map(requirement => dispatch(requirement()));
    return Promise.all(promises);
}