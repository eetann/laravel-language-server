<div class="container ops-main">
    <div class="row">
        <div class="col-md-6">
            <h2>Book Register</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 col-md-offset-1">
            @include('book/message')
            @if ($target == 'store')
                <form action="/book" method="post">
                @elseif($target == 'update')
                    <form action="/book/{{ $book->id }}" method="post">
                        <input type="hidden" name="_method" value="PUT">
            @endif
            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <div class="form-group">
                <label for="name">Book Name</label>
                <input type="text" class="form-control" name="name" value="{{ $book->name }}">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control" name="price" value="{{ $book->price }}">
            </div>
            <div class="form-group">
                <label for="author">Author</label>
                <input type="text" class="form-control" name="author" value="{{ $book->author }}">
            </div>
            <button type="submit" class="btn btn-default">Register</button>
            <a href="/book">Back</a>
            </form>
        </div>
    </div>
</div>
