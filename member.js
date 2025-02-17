function skillsMember() {
    var member = new Member();
    member.skills = ['js', 'css', 'html'];
    member.skills.push('nodejs');
    console.log(member.skills);
}