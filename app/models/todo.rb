class Todo < ApplicationRecord
    before_create :make_uppercase

    def make_uppercase
        self.title.upcase!
    end
end
