export default {
    template:`
    <section id="contact">
        <h2>Contact</h2>
        <div class="container">
            <div class="contact-col">
                <form action="">
                    <div class="form-group">
                        <label for="" class="form-label">Name</label>
                        <input type="text" class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label for="" class="form-label">Email</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Phone</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Content</label>
                        <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Accept</label>
                        <input type="radio" class="form-control" name="radio">
                        <label for="" class="form-label">Decline</label>
                        <input type="radio" class="form-control" name="radio">
                    </div>
                    <input type="submit" class="btn btn-blue" value="送出">
                </form>
            </div>
        </div>
    </section>
    `
}