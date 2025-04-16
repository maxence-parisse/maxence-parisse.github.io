function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    if (sectionId === 'all') {
        sections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
        }
    }

    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.classList.remove('active');
        
        if (filter.getAttribute("onclick").includes(sectionId)) {
            filter.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showContent('all');
});